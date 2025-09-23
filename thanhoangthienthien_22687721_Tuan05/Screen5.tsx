import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Photo = {
  id: string;
  download_url: string;
  author: string;
};

export default function GalleryApp() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=15")
      .then((res) => res.json())
      .then((data: Photo[]) => setPhotos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.title}>Gallery App</Text>

        <Pressable style={styles.btn} onPress={() => setIsGrid(!isGrid)}>
          <Text style={styles.btnText}>
            {isGrid ? "Chuyển sang ListView" : "Chuyển sang GridView"}
          </Text>
        </Pressable>

        <Text style={styles.subTitle}>Hình nổi bật</Text>
        <FlatList
          data={photos.slice(0, 5)}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={{ uri: item.download_url }} style={styles.highlight} />
          )}
          style={{ marginBottom: 20 }}
        />

        <Text style={styles.subTitle}>Thư viện ảnh</Text>
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          key={isGrid ? "GRID" : "LIST"}
          numColumns={isGrid ? 2 : 1}
          renderItem={({ item }) => (
            <View style={isGrid ? styles.gridItem : styles.listItem}>
              <Image
                source={{ uri: item.download_url }}
                style={isGrid ? styles.gridImage : styles.listImage}
              />
              <Text style={styles.author}>{item.author}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", margin: 16 },
  desc: { fontSize: 14, color: "gray", marginHorizontal: 16, marginBottom: 12 },
  subTitle: { fontSize: 18, fontWeight: "600", marginLeft: 16, marginBottom: 8 },
  btn: {
    backgroundColor: "tomato",
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  btnText: { color: "white", textAlign: "center", fontWeight: "bold" },
  highlight: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  listImage: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
  },
  gridItem: {
    flex: 1,
    margin: 8,
    alignItems: "center",
  },
  gridImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  author: { marginTop: 8, fontSize: 12, color: "gray" },
});
