import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import getPost from "../../repository/postsRepository";
const Post = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregaPosts = async () => {
    setLoading(true);
    const posts = await getPost();
    setPostList(posts);
    console.log(posts);
    setLoading(false);
  };

  const renderFooter = () => {
    return <ActivityIndicator size="large" color="#22a" />;
  };

  useEffect(() => {
    if (loading) return null;
    carregaPosts();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={postList}
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "lightgreen",
            marginBottom: 5,
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ fontSize: 10, textAlign: "center" }}>
            {item.title}
          </Text>
        </View>
      )}
    />
  );
};

export default Post;
