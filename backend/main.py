from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Doce Mania API")

class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image_url: str

# Mock de dados
products_db = [
    {"id": 1, "name": "Gourmet Brigadeiro", "description": "Classic chocolate", "price": 4.50, "image_url": "url_aqui"},
    {"id": 2, "name": "Belgian Brownie", "description": "Fudgy and warm", "price": 12.00, "image_url": "url_aqui"},
]

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à API da Doce Mania!"}

@app.get("/products", response_model=List[Product])
def get_products():
    return products_db