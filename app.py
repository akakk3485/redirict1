from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return '✅ Redirect API is live! Use /redirect?to=YOUR_URL'

@app.route('/redirect')
def go():
    to = request.args.get('to')
    if not to:
        return 'Missing ?to=', 400
    return redirect(to, code=302)

if __name__ == '__main__':
    import os
    port = int(os.getenv('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
