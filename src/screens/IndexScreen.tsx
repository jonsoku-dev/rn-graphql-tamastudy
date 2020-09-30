import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useGetNoticeListQuery } from '../generated/graphql';

const IndexScreen = () => {
  const { data } = useGetNoticeListQuery({
    variables: {
      limit: 4,
    },
  });
  if(!data) {
    return null
  }
  return (
    <View>
      <FlatList
        data={data.getNoticeList}
        keyExtractor={(notice) => notice.id}
        renderItem={({ item }) => {
          return (
              <View>
                <Text>
                  {item.title}
                </Text>
              </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
