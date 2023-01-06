from flask import Flask, render_template,jsonify
from bson.json_util import dumps, loads
import pymongo


#app = Flask(__name__)

#################################################
# Database Setup
#################################################
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.NationalTreasure_db
kaggle = db.kaggle


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
    )

@app.route("/kaggle")
def kaggleData():
    # write a statement that finds all the items in the db and sets it to a variable
    kaggle_data= list(kaggle.find())
    json_data=dumps(kaggle_data, indent = 2)
    print(json_data)

    #return the data
    return json_data




if __name__ == "__main__":
    app.run(debug=True)


  




