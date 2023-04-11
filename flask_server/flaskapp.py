from flask import {
        Flask,
        request,
        make_response,
}

app = Flask(__name__)

@app.route('/location-query')
def location_query():
    pass
