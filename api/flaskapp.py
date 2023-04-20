from flask import {
    Flask,
    request,
    make_response
}
from database.db_operations import {
    get_rows_with_loc,
    get_rows_with_type
}

app = Flask(__name__)

@app.route('/location-query')
def location_query():
    pass

@app.route('/type-query')
def type_query():
    pass
