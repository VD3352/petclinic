"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const newOwnerPageObjects_1 = require("../pageObjects/newOwnerPageObjects");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const userData_1 = require("../testdata/userData");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new newOwnerPageObjects_1.newOwnerPageObject();
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.PageName.getText();
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User enter valid First Name, Last Name, Address, City, Telephone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstName = userData_1.default.userData.OwnerData.FirstName;
        yield newOwnerObj.FirstName.sendKeys(firstName);
        let lastName = userData_1.default.userData.OwnerData.LastName;
        yield newOwnerObj.LastName.sendKeys(lastName);
        let address = userData_1.default.userData.OwnerData.Address;
        yield newOwnerObj.Address.sendKeys(address);
        let city = userData_1.default.userData.OwnerData.City;
        yield newOwnerObj.City.sendKeys(city);
        let telephone = userData_1.default.userData.OwnerData.Telephone;
        yield newOwnerObj.Telephone.sendKeys(telephone);
    });
});
cucumber_1.When('User enter valid {string} {string} {string} {string} {string}', function (string, string2, string3, string4, string5) {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.FirstName.sendKeys(string);
        yield newOwnerObj.LastName.sendKeys(string2);
        yield newOwnerObj.Address.sendKeys(string3);
        yield newOwnerObj.City.sendKeys(string4);
        yield newOwnerObj.Telephone.sendKeys(string5);
    });
});
cucumber_1.When('User clicks on Add Owner button on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.AddOwnerButton.click();
    });
});
cucumber_1.Then('User should be navigate on Owners page and added owner should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.PageName.getText();
        yield console.log("page name is : " + pagename);
        //await newOwnerObj.AddOwnerButton.click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNEVBQXdFO0FBQ3hFLG9FQUFpRTtBQUVqRSxtREFBNEM7QUFFNUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHdDQUFrQixFQUFFLENBQUM7QUFFM0MsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRTs7UUFDL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLGtFQUFrRSxFQUFFOztRQUNyRSxJQUFJLFNBQVMsR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3RELE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsSUFBSSxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksT0FBTyxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QyxJQUFJLElBQUksR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVDLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsSUFBSSxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsK0RBQStELEVBQUUsVUFBZ0IsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU87O1FBQzVILE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVsRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1EQUFtRCxFQUFFOztRQUN0RCxNQUFNLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxvRkFBb0YsRUFBRTs7UUFDdkYsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNoRCwyQ0FBMkM7SUFDL0MsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9