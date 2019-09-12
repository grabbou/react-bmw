import builder from 'xmlbuilder';

export default interface IJSONSerialziable {
  toJSON(): Object;
}
