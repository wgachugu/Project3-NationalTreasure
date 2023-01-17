from flask_frozen import Freezer
from app import app


if __name__ == '__main__':
    app.config["FREEZER_BASE_URL"] = "https://wgachugu.github.io/Project3-NationalTreasure/"
    freezer = Freezer(app)
    freezer.freeze()