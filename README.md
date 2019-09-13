<p align="center">
  <img src="assets/bmw_logo.jpg">
</p>

## react-BMW

This is the react renderer for BMW OAP apps that helps creating awesome UI with minimal effort.

The purpose of this project is to make development of the OAP easy and enjoyable using a consistent developer experience based on JavaScript and React. 

## Motivation

We found that the implementation of UI is a real challenge for newbies (maybe not only for newbies :) ). There are HMI, XML and JSON files that represent the same UI. We decided to try to make it easier with well known library - React. Thanks to that we are able to building user interfaces differently by breaking them into reusable components and generate needed files for OAP.

What are the advantages:
- The declarative nature of components promotes predictability
- By unifying your markup with its corresponding view logic, React can actually make views easier to extend and maintain.
- Enables reusability of ready UI components
- Reduces time spent on creating layouts by developers.
- Opens possibility to write apps in well known and documented library.
- Automatic component resolution which means - no more checking which element has which id.

## How does it work?
Instead of creating the `HMI` files and then fill them with data in  imperative way just create react components in declarative way. react-BMW take cares also about adding listeners to buttons and moving to other state (scene).

### React code

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
