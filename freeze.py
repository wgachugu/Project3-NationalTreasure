from flask_frozen import Freezer
from app import app
from config import base_url

if __name__ == '__main__':
    app.config["FREEZER_BASE_URL"] = https://wgachugu/Project3-NationalTreasure
    freezer = Freezer(app)
    freezer.freeze()