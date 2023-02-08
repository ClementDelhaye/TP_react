import React from "react";
import {Text, View} from "react-native";

export function StarshipDetailScreen({route}:any){
  const {name,model,crew,hyperdrive_rating,cost_in_credits}:any = route.params;
    return (
      <View style={{paddingLeft : 20, paddingTop : 20}}>
        <Text>Name : {name}</Text>
        <Text>Model : {model}</Text>
        <Text>Crew : {crew}</Text>
        <Text>Hyperdrive rating : {hyperdrive_rating}</Text>
        <Text>Cost in credits : {cost_in_credits}</Text>
      </View>
    );
};
