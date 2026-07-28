import Chat from '../models/Chat.js';
import Lead from '../models/Lead.js';
import Visitor from '../models/Visitor.js';

export const getAnalytics = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalVisitors = await Visitor.countDocuments();
    const todayVisitors = await Visitor.countDocuments({ createdAt: { $gte: today } });
    
    const totalLeads = await Lead.countDocuments();
    const todayLeads = await Lead.countDocuments({ createdAt: { $gte: today } });

    const totalConversations = await Chat.distinct('sessionId');
    
    // Average chat length (messages per session)
    const totalMessages = await Chat.countDocuments();
    const avgChatLength = totalConversations.length > 0 ? (totalMessages / totalConversations.length).toFixed(1) : 0;

    // Lead conversion rate
    const leadConversion = totalConversations.length > 0 ? ((totalLeads / totalConversations.length) * 100).toFixed(1) : 0;

    res.json({
      success: true,
      data: {
        totalVisitors,
        todayVisitors,
        totalLeads,
        todayLeads,
        totalConversations: totalConversations.length,
        avgChatLength,
        leadConversion: `${leadConversion}%`
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
