import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [
    { id: 1, text: 'Bienvenido a nuestra plataforma', description: '¡Bienvenido a nuestra plataforma! Esperamos que disfrutes de todas las características que ofrecemos, como búsqueda de actividades, descuentos y más.' },
    { id: 2, text: 'Tenemos descuentos hasta el 20 de octubre', description: 'No te pierdas nuestros increíbles descuentos en una amplia gama de actividades hasta el 20 de octubre. ¡Aprovecha estas ofertas especiales!' },
    { id: 3, text: 'Nueva función añadida: ¡Guardado automático!', description: 'Estamos emocionados de anunciar la nueva función de guardado automático. Ahora, tus cambios se guardarán automáticamente, lo que te ahorrará tiempo y preocupaciones.' },
    { id: 4, text: 'Le recordamos que su suscripción vence el 30 de octubre', description: 'Te recordamos que tu suscripción a nuestra plataforma vencerá el 30 de octubre. Asegúrate de renovar tu suscripción para continuar disfrutando de todos los beneficios.' },
  ];

  getAllNotifications(): Notification[] {
    return this.notifications;
  }

  getNotification(id: number): Notification | undefined {
    return this.notifications.find((notification) => notification.id === id);
  }
}
