from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json
from classify import classify

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
@app.route('/api/sweater', methods=['GET'])
def comments_sweater_get():
    return jsonify(json.load(open('./db/sweater.json')))

#returns sentiment analysis results for given comment form a form
@app.route('/api/classify', methods=['POST'])
def classify_post():
    input = request.get_json().get('text')
    if input and len(input) > 0:
        sent, prob = classify(input)
        return jsonify({'sentiment': sent, 'prob': prob})
    else:
        return jsonify({'error', 'There was an error with your request'})

#returns vue app
@app.route('/', methods=['GET'])
def vue():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()