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

# sent, prob = classify(input("Enter a comment:\n"))
# print(sent)
# print ("{0:.3%}".format(prob) + " confidence")

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__,
            static_folder = "../app/static",
            template_folder = "../app/templates")
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


#returns the comments from fake database
@app.route('/api/comments/sweater', methods=['GET'])
def comments_sweater_get():
    return jsonify(json.load(open('./comments/sweater.json')))

#returns sentiment analysis results for given comment form a form
@app.route('/api/classify', methods=['POST'])
def classify_post():
    if request.form['text'] and len(request.form['text']) > 0:
        sent, prob = classify(request.form['text'])
        return jsonify({'sent': sent, 'prob': prob})
    else:
        return jsonify({'error', 'There was an error with your request'})

#returns vue app
@app.route('/', methods=['GET'])
def vue():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()