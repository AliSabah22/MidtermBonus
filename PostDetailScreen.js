import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function PostDetailScreen({ route, navigation }) {
  const { post } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `Post #${post.id}` });
  }, [navigation, post.id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  body: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});
