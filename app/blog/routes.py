from flask import Blueprint

blog = Blueprint('blog', __name__, url_prefix="/blog")


@blog.route('/')
def index():
    return "Blog Homepage"
