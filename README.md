<p align="center">
  <img src="assets/bmw_logo.jpg">
</p>

> This is a React renderer for BMW OAP apps that helps creating awesome UI with minimal effort.

## Getting started

Install this package from private Github registry:

```bash
$ npm install @grabbou/react-bmw@1.0.0-alpha.0
```

Note: [Make sure to have it configured before installing](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry). Otherwise, you will receive a 404 error as this package is not publicly available due to security concerns.

## Motivation

The purpose of this project is to make development of the OAP easy and enjoyable using a consistent developer experience based on JavaScript and React. 

We found that the implementation of UI is a real challenge for newbies (maybe not only for newbies :) ). There are HMI, XML and JSON files that represent the same UI. We decided to try to make it easier with well known library - React. Thanks to that we are able to building user interfaces declaratively by breaking them into reusable components and generate needed files for OAP.

What are the advantages:
- The declarative nature of components promotes predictability
- By unifying your markup with its corresponding view logic, React can actually make views easier to extend and maintain
- Promotes reusability of the already created UI components
- Reduces time spent on creating layouts
- Opens possibility to write apps in well known and documented library
- Faster development loop with in-browser emulator and layout debugger
- Cross-platform by default, allows to run same code on the browser, mobile and different iDrive systems 
- Significant performance improvements with batched updates
- Automatic component resolution - no more getting elements by their IDs and keeping them in sync

## How does it work?

React builds in-memory representation of the application tree which is then projected onto `xml` and `json` files that are needed for BMW. This happens during the build step and is known as "server-side rendering" on the web.

During runtime, React executes the application logic and registers handlers, listening for changes and making sure the updates are delivered in the most performant way possible.

### React code

Please find a sample Scene component below. Please note that the naming is different from BMW internal nomenclature, that is, we have `Scene`, `Body`, `Text` and `Button` instead of `LayoutGroup`, `Container` and `Component`. This is a concept heavily borrowed from [the semantic web](https://en.wikipedia.org/wiki/Semantic_Web).

```tsx
<Scene>
  <Body>
    <Text>React</Text>
    <Text>Is</Text>
    <Text>Really</Text>
    <Text>Helpful</Text>
    <Button onPress={() => navigateTo(NextState)}>Yes, go to settings!</Button>
  </Body>
</Scene>
```

### Generated code

During the build step, the following XML and JSON files are generated.

#### XML

```xml
<?xml version="1.0"?>
<application>
  <container id="8" widget="LT_State_Wide" type="state">
    <layoutGroup id="7" name="List">
      <component id="2" widget="LT_Label_2Row_1TextDyn" type="label">
        <property id="3" value="0"/>
      </component>
      <component id="3" widget="LT_Label_2Row_1TextDyn" type="label">
        <property id="3" value="0"/>
      </component>
      <component id="4" widget="LT_Label_2Row_1TextDyn" type="label">
        <property id="3" value="0"/>
      </component>
      <component id="5" widget="LT_Label_2Row_1TextDyn" type="label">
        <property id="3" value="0"/>
      </component>
      <component id="6" type="button"/>
    </layoutGroup>
  </container>
</application>
```

#### JSON

```json
{
  "schemaVersion": "1.3.0",
  "containers": {
    "8": {
      "type": "state",
      "name": "a88c0b5d-0250-4ec5-b27a-8c0f06a3ecae",
      "properties": {
        "OptionComponents": {
          "type": "Text"
        }
      },
      "components": {
        "7": {
          "2": {
            "type": "label",
            "name": "d68f81cd-3e20-4860-878c-15501dcc1331",
            "properties": {
              "Focusable": {
                "value": 0,
                "type": "UInt"
              }
            },
            "rows": [
              {
                "Text": {
                  "value": "React",
                  "type": "Text"
                }
              }
            ]
          },
          "3": {
            "type": "label",
            "name": "d0128350-ab49-461c-8205-4a2f4e2ea52e",
            "properties": {
              "Focusable": {
                "value": 0,
                "type": "UInt"
              }
            },
            "rows": [
              {
                "Text": {
                  "value": "Is",
                  "type": "Text"
                }
              }
            ]
          },
          "4": {
            "type": "label",
            "name": "571a986f-7f73-4590-929b-0de473ddec67",
            "properties": {
              "Focusable": {
                "value": 0,
                "type": "UInt"
              }
            },
            "rows": [
              {
                "Text": {
                  "value": "Really",
                  "type": "Text"
                }
              }
            ]
          },
          "5": {
            "type": "label",
            "name": "38a7e8f6-4e84-4667-b49b-4021030ad656",
            "properties": {
              "Focusable": {
                "value": 0,
                "type": "UInt"
              }
            },
            "rows": [
              {
                "Text": {
                  "value": "Helpful",
                  "type": "Text"
                }
              }
            ]
          },
          "6": {
            "type": "button",
            "name": "f8bffed9-e687-4a27-931d-84e6f34f0c10",
            "rows": [
              {
                "Text": {
                  "value": "Yes, go to settings!",
                  "type": "Text"
                }
              }
            ]
          }
        }
      }
    }
  }
}
```
