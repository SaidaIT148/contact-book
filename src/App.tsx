import React from "react";
import "./App.css";
import { initialData } from "./constant";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <Grid container item spacing={3}>
        {initialData.map((c, index) => {
          return (
            <Grid key={`contact-${index}`} style={{ padding: "2rem" }}>
              <Card
                style={{
                  width: 400,
                  backgroundColor: "yellow",
                }}
              >
                <CardContent>
                  <Typography
                    style={{ fontSize: 14 }}
                    color="textSecondary"
                    gutterBottom
                  >
                    Relation : {c.relation}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Name : {c.name}
                  </Typography>
                  <Typography
                    style={{
                      marginBottom: 12,
                    }}
                    color="textSecondary"
                  >
                    Email : {c.mail}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Phone Number : {c.phonenumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default App;
