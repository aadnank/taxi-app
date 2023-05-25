from flask import Flask, jsonify, abort, request, make_response, session
from flask_restful import reqparse, Resource, Api
from flask_session import Session
import json
import sqlite3

app = Flask(__name__)
api = Api(app)

class Test(Resource):
    def get(sucessfully):
        return make_response(jsonify("Adnan"), 200)

api.add_resource(Test, '/')

class signIn(Resource):
    def get(sucessfully):
        return make_response(jsonify("LOGIN LOGIN"), 200)
api.add_resource(signIn, '/login')


if __name__ == "__main__":
    app.run(debug=True)