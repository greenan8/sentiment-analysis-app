# COMM 493 Sentiment Analysis App
Utilizing customer review data, constructed an MVP fullstack dashboard for Urban Closet, a fictitious fast-fashion retailer.

## Objectives ##
#### Completed Objectives #### 
* Developed a Sentiment Analysis model with Python.
  - Read below how we trained our model.
* Constructed a simple Flask server. 
  - GET "/" for Vue.js app
  - GET "/api/${product}" for JSON formatted review data.
  - POST {"text": YOUR_STRING} to "/api/classify" for a sentiment result.
* Implemented a Vue.js frontend application.

## Technology Stack ##
#### Server: Flask ####
* https://flask.palletsprojects.com
* https://www.python.org

#### Client: Vue.js ####
* https://vuejs.org
* https://buefy.org
* https://apexcharts.com

#### AI Model: SKLearn & NLTK ####
* https://scikit-learn.org
* https://www.nltk.org

## Model Training ##
__Step 1:__ Read in the reviews from csv file.
```python
dir_path = os.path.dirname(os.path.realpath(__file__))
df_kaggle = pd.read_csv(dir_path + '/comments-kaggle.csv')
df_case = pd.read_csv(dir_path + '/comments.csv')
```

__Step 2:__ Cleaning up the text.
* Make text all lowercase and remove any line breaks
* Tokenizing all non stopwords (stopwords: the, a, an, etc...).
* Stem the word (reducing it to its root word).
```python
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
```

__Step 3:__ Split into test and training sets
```python
df = pd.concat([df_kaggle, df_case])
split = len(df)*7//10

x_train = df.loc[:split, 'Comment'].values
y_train = df.loc[:split, 'Sentiment'].values
x_test = df.loc[split:, 'Comment'].values
y_test = df.loc[split:, 'Sentiment'].values
```

__Step 4:__ Vectorize text
* To feed the data to the Machine Learning model, we must convert categorical data, such as text or words, into a numerical form.
* Note that we only perform fit operation on the training set, once the vectorizer learns from the training data, that same learning can be used on the test data.
* https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html
```python
from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer(sublinear_tf=True, encoding='utf-8', decode_error='ignore')
vectorizer.fit(x_train)
x_train=vectorizer.transform(x_train)
x_test=vectorizer.transform(x_test)
```

__step 5__: Create a model
* https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
```python
from sklearn.linear_model import LogisticRegression
model=LogisticRegression(solver='liblinear')
model.fit(x_train,y_train)
print('Score on training data is: '+str(model.score(x_train,y_train)))
print('Score on testing data is: '+str(model.score(x_test,y_test)))
```
__step 6__: Model persistence
* Save model as pickle files for use from our web applicaiton
* https://docs.python.org/3.7/library/pickle.html
```python
from sklearn.externals import joblib
joblib.dump(en_stopwords, dir_path + '/pkl_objects/stopwords.pkl') 
joblib.dump(model, dir_path + '/pkl_objects/model.pkl')
joblib.dump(vectorizer, dir_path + '/pkl_objects/vectorizer.pkl')
```
### Model 300: ###
#### Method for labeling: ####
We labeled the 300 case provided reviews as either positive or negative. When reviews had both sentiments, we labeled it to whichever side it leaned more heavily towards. For future consideration is creating a model on sentiment rank (example from -1 to 1, where 0 is neutral).	
#### Splitting data: ####
We trained the model on a 70/30 random split.

### Model 8202+300: ###
#### Sourcing Data: ####
The more data to learn from, the more accurate a model can be. We sourced ecommerce review data.
* Source: https://www.kaggle.com/nicapotato/womens-ecommerce-clothing-review
#### Method for labeling: ####
Each review included a recommend Boolean. Those who recommended had a higher rating and mor positive comment. We used this Boolean to categorize as positive or negative
#### Selecting Data: ####
First removed all blank reviews. Then separated into positive and negative. Included 4,101 negative reviews and over 18,000 positive reviews. So selected all 4,101 negative reviews and a random 4,101 positive reviews.
#### Splitting data: ####
We trained the model on a 70/30 random split with all training data coming from the Kaggle data and the test data consisting of the Kaggle data and 300 case data.

## Author(s) ##
* Andrew Greenan - [GitHub](https://github.com/greenan8) - [LinkedIn](https://www.linkedin.com/in/andrewbgreenan/)

## Group Member(s) ##
* Alex Lorant
* Bridget Mulligan
* Luke Nailor
* Robert Cadman
