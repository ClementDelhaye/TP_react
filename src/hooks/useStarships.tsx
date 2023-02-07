import React from "react";
import { useQuery } from "@tanstack/react-query";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import { default as data } from "../api/data.json";

async function fetchData() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`);
  const json = await result.json();
  return json;
}

export function useStarships() {
  const { isLoading, isError, data, error }:any = useQuery({
    queryKey: ["starships"],
    queryFn: fetchData,
  })

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>
  }

  // We can assume by this point that `isSuccess === true`
  
  const Item = ({name,model,crew,hyperdrive_rating,cost_in_credits}:any) => (
      <View style={{paddingLeft : 20, paddingBottom : 20}}>
        <Text>{name}</Text>
        <Text>{model}</Text>
        <Text>{crew}</Text>
        <Text>{hyperdrive_rating}</Text>
        <Text>{cost_in_credits}</Text>
      </View>
  );
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={({item}) => <Item name={item.name} model={item.model} crew={item.crew} hyperdrive_rating={item.hyperdrive_rating} cost_in_credits={item.cost_in_credits} />}
      />
    </SafeAreaView>
  )
}
  
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});