import urllib.request
import os
import pandas as pd
import numpy as np
from nltk.tokenize import RegexpTokenizer
from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords

dir_path = os.path.dirname(os.path.realpath(__file__))
df_kaggle = pd.read_csv(dir_path + '/comments-kaggle.csv')
df_case = pd.read_csv(dir_path + '/comments.csv')


# init Objects
tokenizer=RegexpTokenizer(r'\w+')
en_stopwords=set(stopwords.words('english'))
ps=PorterStemmer()

def getStemmedReview(review):
    review=review.lower()
    review=review.replace("<br /><br />"," ")
    #Tokenize
    tokens=tokenizer.tokenize(review)
    new_tokens=[token for token in tokens if token not in  en_stopwords]
    stemmed_tokens=[ps.stem(token) for token in new_tokens]
    clean_review=' '.join(stemmed_tokens)
    return clean_review

df_kaggle['Comment'].apply(getStemmedReview)
df_case['Comment'].apply(getStemmedReview)

df = pd.concat([df_kaggle, df_case])
split = len(df)*7//10

X_train = df.loc[:split, 'Comment'].values
y_train = df.loc[:split, 'Sentiment'].values
X_test = df.loc[split:, 'Comment'].values
y_test = df.loc[split:, 'Sentiment'].values

from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer(sublinear_tf=True, encoding='utf-8', decode_error='ignore')
vectorizer.fit(X_train)
X_train=vectorizer.transform(X_train)
X_test=vectorizer.transform(X_test)

from sklearn.linear_model import LogisticRegression
model=LogisticRegression(solver='liblinear')
model.fit(X_train,y_train)
print('Score on training data is: '+str(model.score(X_train,y_train)))
print('Score on testing data is: '+str(model.score(X_test,y_test)))



print(model.predict_proba(X_train[1]))

from sklearn.externals import joblib
joblib.dump(en_stopwords, dir_path + '/pkl_objects/stopwords.pkl') 
joblib.dump(model, dir_path + '/pkl_objects/model.pkl')
joblib.dump(vectorizer, dir_path + '/pkl_objects/vectorizer.pkl')