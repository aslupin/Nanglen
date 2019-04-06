from flask import Flask
from flask import jsonify , request
import time
import random
i = 0
history=[]
user=[]
timee=[]

app = Flask(__name__) #fixed

@app.route('/')
def root():
    return "Working"

@app.route('/sendmsg/')
def sendmsg():
    global user
    global history
    global timee
    timee.append(time.ctime())
    msg=request.args.get('message')
    usr=request.args.get('user')
    history.append(msg)
    user.append(usr)
    print(str(history)+' '+str(user))
    return 'Sendedd!!'

@app.route('/seemsg/')
def seemsg():
    histry={}
    for i in range (len(user)):
        histry[timee[i]]=[str(user[i]),str(history[i])]
    return jsonify(
        histry
    )
@app.route('/master/')
def master():
    orental={}
    rental=request.args.get('rental')
    if(rental == 'condo'):
        orental['condo']=['Price range = condo']
        return jsonify(
            orental
        )
    elif(rental == 'apartment'):
        orental['apartment']=['Price range = apartment']
        return jsonify(
            orental
        )
    elif(rental == 'home'):
        orental['home']=['Price range = home']
        return jsonify(
            orental
        )
    elif(rental == 'townhouse'):
        orental['townhouse']=['Price range = townhouse']
        return jsonify(
            orental
        )
if __name__ == "__main__":
    app.run(debug = True,host="0.0.0.0", port=5000)
