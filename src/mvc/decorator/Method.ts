import {MVCContainer} from "../MVCContainer";
import {Metadata} from "../../metadata/Metadata";

export function Get(route: string|RegExp) {
    return (target: any, actionName: string) => {
        registerHelper(target, "get", route, actionName);
    };
}

export function Post(route: string|RegExp) {
    return (target: any, actionName: string) => {
        registerHelper(target, "post", route, actionName);
    };
}

export function Put(route: string|RegExp) {
    return (target: any, actionName: string) => {
        registerHelper(target, "put", route, actionName);
    };
}

export function Patch(route: string|RegExp) {
    return (target: any, actionName: string) => {
        registerHelper(target, "patch", route, actionName);
    };
}

export function Delete(route: string|RegExp) {
    return (target: any, actionName: string) => {
        registerHelper(target, "delete", route, actionName);
    };
}

function registerHelper(target, method, route, actionName) {
    const params = Metadata.getParams(target, actionName);
    MVCContainer.registerAction(target.constructor, method, route, actionName, params);
}






