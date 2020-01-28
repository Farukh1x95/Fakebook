import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export const Database = new Mongo.Collection("Database");

if (Meteor.isClient) {
  Meteor.subscribe("AllData", Database.find({}).fetch());
}
// On Server
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("AllData", () => {
    return Database.find();
  });
  Meteor.publish("UserEmail", () => {
    return Meteor.user.emails[0].address;
  });
}

Meteor.methods({
  // Insert Comment
  "comment.insert"(data) {
    check(data, Object);
    const { email, message, createdBy, createdAt } = data;
    console.log(email, message, createdBy, createdAt);

    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized", "you are not signed");
    }
    console.log("isServer" + message);
    // Insert  Into Collection Database
    Database.insert({
      email,
      message,
      createdBy,
      createdAt
    });
  },
  //   Delete Comment
  "comment.delete"(_id) {
    check(_id, String);
    console.log(`Delete ID is ${_id}`);
    Database.remove(_id);
  }
});
