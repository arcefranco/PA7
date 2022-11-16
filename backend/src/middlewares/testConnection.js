import { Sequelize } from "sequelize";
import { pa7_CG_Connection } from "../helpers/connections";
 import { pa7_GF_Connection } from "../helpers/connections";
import { pa7_ALIZZE_Connection } from "../helpers/connections";
import { pa7_AUT_Connection } from "../helpers/connections";
import { pa7_CH_Connection } from "../helpers/connections";
import { pa7_DET_Connection } from "../helpers/connections";
import { pa7_ELYSEES_Connection } from "../helpers/connections";
import { pa7_LUXCAR_Connection } from "../helpers/connections";  


export const testConnection = (req, res, next) => {
    const db = req.header('db-connection');

    if (!db) {
        return next({ status: 552, message: "db not found" });
     } 
     else {

        if(db === 'pa7_cg'){
            req.db = pa7_CG_Connection
          }
         else if(db === 'pa7_gf'){
            req.db = pa7_GF_Connection
            
          }

        else if(db === 'pa7_alizze'){
            req.db = pa7_ALIZZE_Connection
            
          } 

        else if(db === 'pa7_aut'){
            req.db = pa7_AUT_Connection
            
          } 

        else if(db === 'pa7_ch'){
            req.db = pa7_CH_Connection
            
          }

        else if(db === 'pa7_det'){
            req.db = pa7_DET_Connection
            
          } 

        else if(db === 'pa7_elysees'){
            req.db = pa7_ELYSEES_Connection
            
          }

        else if(db === 'pa7_gf_luxcar'){
            req.db = pa7_LUXCAR_Connection
            
          }    
         
         next(); 

     }
}