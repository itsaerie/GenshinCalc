from flask import Flask, render_template
import os
import sys

# Flask app
app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template("index.html")

app.run(
    use_reloader = True,
    debug = True,
    host = os.getenv("IP", "0.0.0.0"),
    port = int(os.getenv("PORT", 8080))
)