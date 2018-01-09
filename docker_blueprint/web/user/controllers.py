from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound


user = Blueprint('user', __name__, template_folder='templates')


@user.route('/', defaults={'page': 'index'})
@user.route('/logout', defaults={'page': 'logout'})
# def logout():
#     return render_template('logout.html')

# # =========================================
#
#
# # @simple_page.route('/', defaults={'page': 'index'})
# # @simple_page.route('/<page>')
# # def show(page):
# #     try:
# #         return render_template('pages/%s.html' % page)
# #     except TemplateNotFound:
# #         abort(404)

# @user.route('/', defaults={'page': 'index'})
@user.route('/<page>')
def show(page):
    try:
        return render_template('%s.html' % page, page=page)
    except TemplateNotFound:
        abort(404)


# @user.errorhandler(404)
# def page_not_found(e):
#     return 'Page Not Found'
