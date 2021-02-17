from flask import Flask, render_template, redirect
app = Flask('app', static_url_path='', static_folder='static', template_folder='templates')

@app.route('/')
def hello_world():
  return redirect("/index.html")

@app.route('/__repl')
def no_source():
  return redirect("/index.html")

#@app.route('/player/index.html') #Runs the actual Vissonance player
#def player-index-html():
#  return render_template("index.html")

app.run(host='0.0.0.0', port=8080)