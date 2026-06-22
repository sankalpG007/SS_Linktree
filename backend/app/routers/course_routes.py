from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.course import Course

router = APIRouter()


@router.get("/courses")
def get_courses():

    db: Session = SessionLocal()

    try:
        courses = db.query(Course).all()

        return courses

    finally:
        db.close()

@router.get("/courses/{course_id}")
def get_course(course_id: int):

    db: Session = SessionLocal()

    try:
        course = (
            db.query(Course)
            .filter(Course.id == course_id)
            .first()
        )

        return course

    finally:
        db.close()