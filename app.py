from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/redirect')
def go():
    to = request.args.get('to')
    if not to:
        return "Missing ?to=", 400
    return redirect(to, 302)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
