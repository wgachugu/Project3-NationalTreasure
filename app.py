from flask import Flask, render_template,jsonify
#from bson.json_util import dumps, loads
import pymongo
from bson import json_util, ObjectId
import json


#################################################
# Database Setup
#################################################
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.NationalTreasure_db
kaggle = db.kaggle
latlong=db.latlong
dataworld=db.dataworld
activity=db.activity
activity2=db.activity2
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/kaggle<br/>"
        f"/activity<br/>"
        f"/dataworld<br/>"
        f"/latlong<br/>"
        f"/activity2"
    )

@app.route("/kaggle")
def kaggleData():
    # write a statement that finds all the items in the db and sets it to a variable
    kaggle_data= list(kaggle.find())
    #Dump loaded BSON to valid JSON string and reload it as dict
    kaggle_data_json_data=json.loads(json_util.dumps(kaggle_data, indent = 2))
    

    #return the data
    return jsonify(kaggle_data_json_data)

@app.route("/dataworld")
def dataworldData():
    # write a statement that finds all the items in the db and sets it to a variable
    dataworld_data= list(dataworld.find())
    #Dump loaded BSON to valid JSON string and reload it as dict
    dataworld_data_json_data=json.loads(json_util.dumps(dataworld_data, indent = 2))
    

    #return the data
    return jsonify(dataworld_data_json_data)

@app.route("/activity2")
def activity2Data():
    # write a statement that finds all the items in the db and sets it to a variable
    activity2_data= list(activity2.find())
    #Dump loaded BSON to valid JSON string and reload it as dict
    activity2_data_json_data=json.loads(json_util.dumps(activity2_data, indent = 2))
    

    #return the data
    return jsonify(activity2_data_json_data)



@app.route("/latlong")
def latlongData():
    # write a statement that finds all the items in the db and sets it to a variable
    latlong_data= list(latlong.find())
    
    #Dump loaded BSON to valid JSON string and reload it as dict
    latlong_json_data = json.loads(json_util.dumps(latlong_data,indent = 2 ))
       #print(latlong_json_data)

    #return the data
    return  jsonify(latlong_json_data)




if __name__ == "__main__":
    app.run(debug=True)


  




