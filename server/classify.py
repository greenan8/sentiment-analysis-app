import pickle
import os
import numpy as np
import joblib

loaded_model=joblib.load("./model8202/pkl_objects/model.pkl")
loaded_stop=joblib.load("./model8202/pkl_objects/stopwords.pkl")
loaded_vec=joblib.load("./model8202/pkl_objects/vectorizer.pkl")

def classify(document):
    X = loaded_vec.transform([document])
    y = loaded_model.predict(X)[0]
    proba = np.max(loaded_model.predict_proba(X))
    return y, proba
