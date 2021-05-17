# -*- codeing = utf-8 -*-
# @Time : 2020/11/12 10:49
# @File : .py
# @Software: PyCharm
from flask import Flask, render_template, request
from gevent import pywsgi
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)  # 加上这一条就实现跨域了

@app.route("/")
def first_page():
    return render_template("index.html")

@app.route("/music",methods=['post'])
def music():
    return render_template("music.html")
    
@app.route("/login",methods=['post'])
def login():
    return render_template("login.html")

if __name__ == '__main__':
    app.run(debug=True, port=5000)