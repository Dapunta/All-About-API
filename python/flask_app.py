import json

from flask import Flask, Response
from flask_cors import CORS

app = Flask(import_name=__name__)
CORS(app=app)

@app.route('/', methods=['GET'])
def test() -> Response:
    response = {'status':'success', 'message':'Hello World!'}
    return Response(response=json.dumps(obj=response, sort_keys=False), mimetype='application/json')

if __name__ == '__main__':
    app.run(debug=True)