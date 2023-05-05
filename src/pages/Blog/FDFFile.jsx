import React, { useContext, useEffect, useState } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { AuthContext } from "../../providers/AuthProvider";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "light",
    // color: "#B91C1C",
    marginBottom:20,
  },
  text: {
    marginBottom: 18,
    fontSize: 14,
    textAlign: "justify",
    fontWeight: 500,
    color: "#B45309"
  },

  header: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "left",
    color: "#B91C1C",
    fontWeight: 700,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
// (<h1 className="font-extrabold text-5xl my-8 text-center text-gradient">
//           Simple Question Answer
//         </h1>
//         <div>
//           {blogs &&
//             blogs.map((blog) => (
//               <SingleBlog key={blog.blog_id} blog={blog}></SingleBlog>
//             ))}
//         </div>)

const FDFFile = () => {
//   const { blogs, loading } = useContext(AuthContext);
// const [blogs, setBlogs] = useState([]);
// useEffect(() => {
//     fetch('https://tasty-tidbits-server-alimbdit.vercel.app/blog').then(res=> res.json()).then(data=>setBlogs(data))
// },[])

// console.log(blogs)

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>Simple Question Answer</Text>
        {/* <Image style={styles.image} src={LebronStretch} /> */}
        
        <Text
          style={styles.header}
        >A. Tell us the differences between uncontrolled and controlled components. </Text>
        <Text
          style={styles.text}
        >Ans: In React, controlled components are those that hold their state within the component itself and make changes through callbacks, while uncontrolled components hold their state within the DOM and make changes through user input. Controlled components use event handlers and state to update their values, while uncontrolled components use refs to get the form value. While controlled components provide more control over user input and allow for processing and validation before submission, they come with a higher code overhead. In contrast, uncontrolled components are quicker to set up and use less code, but come with less control over user input. The choice between controlled and uncontrolled components ultimately depends on the specific use case and preference of the developer.</Text>
        <Text
          style={styles.header}
        >B. How to validate React props using 'PropTypes'? </Text>
        <Text
          style={styles.text}
        >Ans: To validate React props using 'PropTypes', you can use the 'propTypes' property to define expected types for the props being passed down to a component. Import the 'PropTypes' library and define the type of each prop using its corresponding PropType. For example, you can use 'PropTypes.string' to define a string type, 'PropTypes.number' for a number type, and so on. Additionally, you can use 'isRequired' to define required props. 'PropTypes' allows you to catch errors related to props early, ensuring that components behave as expected. Remember that 'PropTypes' is a separate package from React and needs to be installed separately.</Text>
        <Text
          style={styles.header}
        >C. Tell us the difference between nodejs and express js. </Text>
        <Text
          style={styles.text}
        >Ans: Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It provides built-in modules for basic functionalities. Express.js is a web application framework that runs on top of Node.js. It simplifies the process of building web applications by providing additional features for routing, middleware, and templating. While Node.js is a core technology for building server-side applications, Express.js is a higher-level tool that extends Node.js specifically for building web applications.</Text>
        <Text
          style={styles.header}
        >D. What is a custom hook, and why will you create a custom hook? </Text>
        <Text
          style={styles.text}
        >Ans: A custom hook is a JavaScript function that starts with the word 'use' and uses the existing React hooks to provide a reusable functionality. It allows developers to extract common logic from components and share it across multiple components without duplicating code. Developers create custom hooks to abstract away complex logic from the components and make it reusable. They can also use it to share stateful logic between different components. For example, a custom hook can be created to fetch data from an API endpoint and manage the loading and error state of the data. This custom hook can be reused in multiple components to fetch data without duplicating the same code. Custom hooks also help to improve the code readability, reduce code duplication, and make the codebase more maintainable.</Text>

        
      </Page>
    </Document>
  );
};

export default FDFFile;
