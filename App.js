import React, { createContext, useState, useContext } from "react";
import { View, Text, ScrollView, StatusBar, Image, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";


// Define themes
const themes = {
  light: {
    background: "#FFFFFF",
    text: "#000000",
    accent: "#24685b",
  },
  dark: {
    background: "#121212",
    text: "#FFFFFF",
    accent: "#64FFDA",
  },
};

// Create theme context
const ThemeContext = createContext();

// Custom hook to consume the theme
const useTheme = () => useContext(ThemeContext);

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const skillsIcons = [
  "language-html5",
  "language-css3",
  "language-php",
  "language-python",
  "language-javascript",
];

const projects = [
  {
    name: "Project 1",
    icon: "airballoon",
  },
  {
    name: "Project 2",
    icon: "airballoon",
  },
  {
    name: "Project 3",
    icon: "airballoon",
  },
];

const App = () => {
  const [theme, setTheme] = useState("light");

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ScrollView style={{ flex: 1, backgroundColor: themes[theme].background }}>
        <StatusBar
          translucent={false}
          barStyle={theme === "light" ? "dark-content" : "light-content"}
          backgroundColor={themes[theme].accent}
        />
        <View
          style={{
            backgroundColor: themes[theme].accent,
            paddingBottom: Layout.height * 0.2,
            borderBottomLeftRadius: Layout.width * 0.1,
            borderBottomRightRadius: Layout.width * 0.1,
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              paddingHorizontal: 32,
              marginVertical: 20,
            }}
          >
            <SimpleLineIcons
              name="equalizer"
              size={20}
              style={{ color: themes[theme].text }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 32,
              marginVertical: 36,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={require("./assets/icon.png")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 16,
              }}
            />
            <View>
              <Text style={{ color: themes[theme].text, fontSize: 20 }}>
                Chirayu Jain
              </Text>
              <Text style={{ color: themes[theme].text }}>React Native dev</Text>
            </View>
          </View>
        </View>

        {/* Theme toggle button */}
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: themes[theme].accent,
            borderRadius: 50,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
          }}
        >
          <Text style={{ color: themes[theme].text }}>
            {theme === "light" ? "Dark" : "Light"} Theme
          </Text>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: themes[theme].background,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16,
            marginTop: -Layout.height * 0.15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: themes[theme].text }}>Bio</Text>
            <AntDesign name="user" size={20} color={themes[theme].text} />
          </View>
          <Text style={{ color: themes[theme].text }}>
            I'm a 3rd-year student studying Computer Science Engineering. I'm
            enthusiastic about applying my academic knowledge and practical skills
            to solve real-world problems. I'm eager to work with experienced
            professionals, gain hands-on experience, and contribute to meaningful
            projects. My goal is to start my career in a dynamic field where I can
            learn and grow. I'm looking for analyst training opportunities to
            apply my skills and make a positive impact{" "}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: themes[theme].background,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: themes[theme].text }}>Skills</Text>
            <MaterialCommunityIcons name="pen" size={20} color={themes[theme].text} />
          </View>
          <ScrollView horizontal style={{ marginVertical: 8 }}>
            {skillsIcons.map((skill, index) => (
              <View
                key={index}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  borderWidth: 2,
                  borderColor: themes[theme].accent,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 5,
                }}
              >
                <MaterialCommunityIcons
                  name={skill}
                  size={30}
                  style={{ color: themes[theme].accent }}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <ScrollView horizontal>
          {projects.map((project, index) => (
            <View
              key={index}
              style={{
                backgroundColor: themes[theme].accent,
                marginHorizontal: 8,
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
                alignItems: "center",
                width: Layout.width * 0.7,
              }}
            >
              <Text style={{ fontSize: 20, color: themes[theme].text }}>
                {project.name}
              </Text>
              <MaterialCommunityIcons
                name={project.icon}
                size={150}
                style={{ color: themes[theme].text, marginVertical: 40 }}
              />
              <TouchableOpacity>
                <View style={{backgroundColor: themes[theme].background,
                  borderRadius:20,
                  paddingHorizontal:20,
                  paddingVertical:10,
                  }}>
                  <Text style={{ color: themes[theme].accent }}>View Project</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            backgroundColor: themes[theme].background,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: themes[theme].text }}>Find me</Text>
          </View>
          <ScrollView horizontal style={{ marginVertical: 8 }}>
            {skillsIcons.map((skill, index) => (
              <TouchableOpacity key={index}>
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    borderWidth: 2,
                    borderColor: themes[theme].accent,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="facebook"
                    size={30}
                    style={{ color: themes[theme].accent }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </ThemeContext.Provider>
  );
};

export default App;
