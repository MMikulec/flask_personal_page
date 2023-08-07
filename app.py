import os

from flask import Flask, render_template

app = Flask(__name__)
if os.getenv('ENVIRONMENT') == 'PRODUCTION':
    app.config.from_pyfile('production.py')
else:
    app.config.from_pyfile('config.py')


@app.route("/")
def index():
    return render_template("index.jinja2")


@app.route("/try")
def trytext():
    return render_template("try.jinja2")


if __name__ == '__main__':
    app.run(debug=True)
