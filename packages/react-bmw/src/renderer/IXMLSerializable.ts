import builder from "xmlbuilder";

export default interface IXMLSerialziable {
  toXML(el: builder.XMLElement): builder.XMLElement;
}
