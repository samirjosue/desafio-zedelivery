import express from "express";
import mongoose from "mongoose";

import PartnerModel from "./modules/partners/model/Partner";

const app = express();

app.use(express.json());

app.listen(3333, () => console.log("Rodando... conectado ao banco"));
