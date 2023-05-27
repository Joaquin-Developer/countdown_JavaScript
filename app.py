from flask import Flask
from flask import render_template, send_from_directory

app = Flask(__name__)


@app.get("/")
def index():
    return render_template("index.html")


@app.route('/src/<path:path>')
def get_files(path):
    return send_from_directory('src', path)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
