import sqlite3

sql_cmd = ""
db_name = "./dura.sqlite"

# Open cursor and connection
conn = sqlite3.connect(db_name)
cur = conn.cursor()

# Make SQL command
sql_cmd += "CREATE TABLE IF NOT EXISTS objects"

# Execute SQL command
cur.execute(sql_cmd)

# Close cursor and connection
cur.close()
conn.close()
