import os

from flask import Flask


def create_app():
    app = Flask(__name__)
    if os.getenv('ENVIRONMENT') == 'PRODUCTION':
        app.config.from_pyfile('production.py')
    else:
        app.config.from_pyfile('config.py')

    from app.admin.routes import admin
    from app.blog.routes import blog
    from app.main.routes import main

    app.register_blueprint(admin)
    app.register_blueprint(blog)
    app.register_blueprint(main)

    return app
