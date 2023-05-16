import sqlite3

conn = sqlite3.connect('taxi.db')
cur = conn.cursor()

# f = open("tableCreation.sql")

cur.execute('INSERT into users (phoneNum, userName) Values ("5063215543", "aakhan");')
# cur.execute('INSERT into users (phoneNum, userName) Values ("5063215543", "aakhan");')
cur.execute('INSERT into users (phoneNum, userName) Values ("4567892341", "brahmpreetS");')
cur.execute('INSERT into users (phoneNum, userName) Values ("3421563452", "danielA");')
conn.commit()
cur.execute('SELECT * from users')

print(cur.fetchall())