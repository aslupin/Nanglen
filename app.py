from flask import Flask
from flask import jsonify , request
import time
import random
'''
i = 0
history=[]
user=[]
timee=[]
'''
app = Flask(__name__) #fixed
typeproject=['condo','condo','apartment','apartment']
name=['PREMIO VETRO','CHAPTER ONE','M AND M','THE PRIZE']
price=[14000,11000,4600,30000]
fire=['real','real','5','5']
water=['real','real','7','8']
allrental=[]
allinfo=[]
infos=['ABOUT PREMIO VETRO Boutique style condominium with standard facility. the final high building standard in the agricultural area opposite the Kasetsart University Ngamwongwan Gate 1','A pretty nice and boutique style condominium','Apartment with elevator in Soi Phaholyothin 34 (Soi beside Mayo Hospital) Approximately 400 meters into the alley on the right hand side. Have motorcycle in front of the alley.','THE PRIZE opposite Kasetsart University 1st DOOR on Ngamwongwan rd.']
address=['28 Thanon Ngamwongwan, Khwaeng Lat Yao, Khet Chatuchak, Krung Thep Maha Nakhon 10900','2033 Phahonyothin Alley, Khwaeng Lat Yao, Khet Chatuchak, Krung Thep Maha Nakhon 10900','86/9, 86/9 Thanon Ngamwongwan, Lat Yao, Chatuchak, Bangkok 10900','Soi Than Phuying Phahon, Khwaeng Lat Yao, Khet Chatuchak, Krung Thep Maha Nakhon 10900']
star=[8.4,7,5,4.7]
for i in range (4):
    allrental.append([fire[i],water[i]])
for i in range (4):
    allinfo.append([name[i],price[i],infos[i],address[i],star[i]])
@app.route('/')
def root():
    return "Working"

@app.route('/info/') #choice=0,1,2,3 = vetro,chapter1,MandM,theprize ต่ามลำดับ
def info():
    bigdata={}
    global allinfo
    for i in range (2):
        for j in range (6):
            allinfo[i].append(1)
        if(i==0):
            bigdata[i]=allinfo[i],'https://sv1.picz.in.th/images/2019/04/07/tvibfn.jpg'
        elif(i==1):
            bigdata[i]=allinfo[i],'https://sv1.picz.in.th/images/2019/04/07/tvij5g.jpg'
    for i in range(2,4):
        allinfo[i].append(1)
        allinfo[i].append(1)
        allinfo[i].append(0)
        allinfo[i].append(0)
        allinfo[i].append(1)
        allinfo[i].append(0)
        if(i==2):
            bigdata[i]=allinfo[i],'https://sv1.picz.in.th/images/2019/04/07/tviHVq.jpg'
        elif(i==3):
            bigdata[i]=allinfo[i],'https://sv1.picz.in.th/images/2019/04/07/tvivM0.jpg'
    choice=request.args.get('choice')
    if (choice=='0'):
        return jsonify(
            bigdata[0]
        )
    elif(choice=='1'):
        return jsonify(
            bigdata[1]
        )
    elif(choice=='2'):
        return jsonify(
            bigdata[2]
        )
    elif(choice=='3'):
        return jsonify(
            bigdata[3]
        )
@app.route('/filter/') #ขอค่า rental , min , max ส่งกลับเป็นหอพักที่อยู่ในเงื่อนไขตามค่า min max
def filter():
    global allrental
    global typeproject
    global price
    orental={}
    rental=request.args.get('rental')
    minn=request.args.get('min')
    maxx=request.args.get('max')
    count=0
    if(int(maxx)>=max(price)):
        for i in range (int(minn),max(price)+1):
            if((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==0):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tvibfn.jpg'
                count+=1
            elif((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==1):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tvij5g.jpg'
                count+=1
            elif((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==2):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tviHVq.jpg'
                count+=1
            elif((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==3):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tvivM0.jpg'
                count+=1
            
            if(count==4):
                break
    else:
        for i in range (int(minn),int(maxx)):
            if((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==0):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tvibfn.jpg'
                count+=1
            elif((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==1):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tvij5g.jpg'
                count+=1
            elif((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==2):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tviHVq.jpg'
                count+=1
            elif((i in price) and (rental == typeproject[price.index(i)]) and price.index(i)==3):
                orental[name[price.index(i)]]=allrental[price.index(i)],'https://sv1.picz.in.th/images/2019/04/07/tvivM0.jpg'
                count+=1
            if(count==4):
                break
    
    return jsonify(
        orental
    )
if __name__ == "__main__":
    app.run(debug = True,host="0.0.0.0", port=5000)


