import axios from "axios";
import { Expense_v1_Url } from "../../Utlis/Endponits";
import { API } from "../../hook/api";

export function loadpostwithedata(callback) {
          API.get(Expense_v1_Url)
                    .then(rexponse => {
                              callback(rexponse.data);
                    })
                    .catch(error => {
                              alert('Errror msg' + error);
                    })
}

export function saveexpense(model, callback) {
          API.post(Expense_v1_Url, model)
                    .then(response => {
                              loadpostwithedata(callback);
                    })
                    .catch(error => {
                              alert('Errore msg' + error);
                    })
}

export function updateexpense(model, callback) {
          const url = Expense_v1_Url + "/" + model.id;
          API.put(url, model)
                    .then(response => {
                              loadpostwithedata(callback);
                    })
                    .catch(error => {
                              alert('Error msg' + error);
                    })
}

export function deleteexpense(id, callback) {
          let url = Expense_v1_Url + "/" + id;
          API.delete(url)
                    .then(response => {
                              loadpostwithedata(callback)
                    })
                    .catch(error => {
                              alert('Error msg' + error);
                    })
}