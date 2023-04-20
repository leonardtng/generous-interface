'''
Script to initialize database tables
'''
import sqlite3

sql_cmd = ""
db_name = "./dura.sqlite"

# Open cursor and connection
conn = sqlite3.connect(db_name)
cur = conn.cursor()

# Make SQL command
sql_cmd += '''
CREATE TABLE IF NOT EXISTS objects (
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    object_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    link VARCHAR NOT NULL,
    image_link VARCHAR NOT NULL,
    location_label VARCHAR NOT NULL,
    location_name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    accession VARCHAR,
    negative_number VARCHAR,
    image_source VARCHAR,
    image_type VARCHAR
);
'''

# Execute SQL command
cur.execute(sql_cmd)

# Close cursor and connection
cur.close()
conn.close()
