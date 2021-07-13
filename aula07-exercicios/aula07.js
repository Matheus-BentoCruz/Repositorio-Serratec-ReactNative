import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import getPost from '../../repository/postsRepository';
import { Ionicons } from '@expo/vector-icons';
import Posts from '../../../model/Posts';
const Post = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregaPosts = async () => {
    let postListTemp = await getPost();
    setPostList(postListTemp);
    console.log(postList);
  };

  const savePost = async (postItem) => {
    Posts.createTable()

    const newPosts = new Posts(postItem);
    newPosts.save();
  }

  conts getPost = async() => {
    console.log("SQLITE: " + (awaitPosts.find(1)));
  }

  const renderFooter = () => {
    return <ActivityIndicator size="large" color="#22a" />;
  };
  useEffect(() => {
    carregaPosts();
    getPost();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={postList} //sempre passa um estado
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.texto}>{item.title.toUpperCase()}</Text>
          <TouchableOpacity onPress={() => savePost(item)}>
            <Ionicons name="save" size={32} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Post;
