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


class signUp(Resource):
    def post(self):
        if not request.json:
            abort(400)
        
        #Parse the json
        parser = reqparse.RequestParser()
        try:
            # Check for required attributes in json document, create a dictionary
            parser.add_argument('userName', type=str, required=True)
            parser.add_argument('phoneNum', type=str, required=True)
            request_params = parser.parse_args()
        except:
            abort(400)
        
        try: 
            conn = sqlite3.connect('taxi.db')
            cur = conn.cursor()
            cur.execute(f"INSERT into users (phoneNum, userName) Values (\"{request_params['phoneNum']}\", \"{request_params['userName']}\");")
            # cur.execute(f"INSERT into users (phoneNum, userName) Values ("hello", "506444333");")

            conn.commit()
        except:
            abort(500)
        return make_response(jsonify("added"), 201)

api.add_resource(signUp, '/v1/signUp')

if __name__ == "__main__":
    app.run(debug=True)