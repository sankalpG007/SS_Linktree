from pydantic import BaseModel


class ApplicationCreate(BaseModel):
    name: str
    email: str
    phone: str
    college: str
    current_year: str
    city: str
    course_id: int