import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModuleControlButtons from "./ModuleControleButtons";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const currentUserRole = useSelector(
    (state: any) => state.accountReducer.currentUser?.role
  );
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <div>
      {currentUserRole === "FACULTY" && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={createModuleForCourse}
        />
      )}

      <br />
      <br />

      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul className="mt-2 list-group rounded-0 w-100">
        {modules.map((module: any) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && currentUserRole === "FACULTY" && (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}

              {currentUserRole === "FACULTY" && (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              )}
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons &&
                module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    {currentUserRole === "FACULTY" && <LessonControlButtons />}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
